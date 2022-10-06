import { Request, Response, NextFunction } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { WithdrawalInstance } from '../models/withdrawal'
import { UserInstance } from '../models/user'
import { AccountInstance } from '../models/account'
import { withdrawalSchema } from '../utils/utils'

export async function withdrawal(req: Request | any, res: Response, next: NextFunction) {
    const withdrawalId = uuidv4()

    try {
        let wallet: number | any;
        const userID = req.user.id

        const { amount, bankName, accNumber } = req.body
        const validateInput = await withdrawalSchema.validate(req.body);
        if (validateInput.error) {
            return res.status(400).json(validateInput.error.details[0].message)
        }
        const customer = (await UserInstance.findOne({ where: { id: userID } })) as unknown as { [key: string]: string };
        if (!customer) {
            return res.status(401).json({ message: ' Sorry customer does not exist' })
        }
        //
        const validateAccount = await AccountInstance.findOne({ where: { accNumber } }) as unknown as { [key: string]: string }
        if (!validateAccount) {
            return res.status(401).json({ message: 'Sorry this account is not registered' })
        }
        if (validateAccount.userId !== userID) {
            return res.status(401).json({ message: ' Sorry this account is not registered by this customer!' })
        }
        wallet = customer.wallet

        if (amount > wallet) {
            return res.status(401).json({ message: 'Insufficient fund!' })
        }
        // fluterwave function here...
        const newwallet = wallet - amount
        const customerUpdatedRecord = await UserInstance.update({ wallet: newwallet }, { where: { id: userID } })
        const withdrawalHistory = await WithdrawalInstance.create({
            id: withdrawalId,
            amount,
            bankName,
            accNumber,
            userID
        })
        return res.status(201).json({ message: `You have successfully withdrawn N${amount} from your wallet`, withdrawalHistory })

    } catch (error) {


    }

}

export async function getAllWithdrawals(req: Request, res: Response, next: NextFunction) {
    try {
        const allWithdrawalHistory = await WithdrawalInstance.findAll()
        if (!allWithdrawalHistory) {
            return res.status(404).json({ message: 'Sorry there is currently no withdrawal history!' })
        }

        return res.status(200).json(allWithdrawalHistory)

    } catch (error) {
        return res.status(500).json({ message: 'failed to get all withdrawal history!' })
    }
}

// export async function getAllUserWithdrawals(req: Request | any, res: Response, next: NextFunction) {
//     try {
//         const userID = req.user.id

//         const allWithdrawalHistory = await WithdrawalInstance.findAll({ where: { userID } })
//         if (!allWithdrawalHistory) {
//             return res.status(404).json({ message: 'Sorry there is currently no withdrawal history!' })
//         }

//         return res.status(200).json(allWithdrawalHistory)

//     } catch (error) {
//         return res.status(500).json({ message: 'failed to get all withdrawal history!' })
//     }
// }



export async function getAllUserWithdrawals(req: Request | any, res: Response, next: NextFunction) {
    try {
        const { id } = req.params

        const allWithdrawalHistory = await WithdrawalInstance.findAll({ where: { userID: id } })
        if (!allWithdrawalHistory) {
            return res.status(404).json({ message: 'Sorry there is currently no withdrawal history!' })
        }

        return res.status(200).json(allWithdrawalHistory)

    } catch (error) {
        return res.status(500).json({ message: 'failed to get all withdrawal history!' })
    }
}
