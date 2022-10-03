
import express, { Request, Response, NextFunction } from "express";
import { v4 as uuidv4, validate } from "uuid";
import { AccountInstance } from "../models/account";
import { UserInstance } from "../models/user";
import { SellAirtimeInstance } from "../models/transactions"
import { createAccountSchema, sellAirtimeSchema, options } from '../utils/validation'

import { emailVerificationView, transactionNotification } from "./mailSender";
import { sendMail } from "./emailService";



export async function CreateAccount(
  req: Request | any,
  res: Response,
  next: NextFunction
) {
  const id = uuidv4();
  try {
    console.log(req)
    const userID = req.user.id;
    const ValidateAccount = createAccountSchema.validate(req.body, options);
    if (ValidateAccount.error) {
      return res.status(400).json({
        Error: ValidateAccount.error.details[0].message,
      });
    }
    const duplicatAccount = await AccountInstance.findOne({
      where: { accNumber: req.body.accNumber },
    });
    if (duplicatAccount) {
      return res.status(409).json({
        msg: "Account number is used, please enter another account number",
      });
    }
    const record = await AccountInstance.create({
      id: id,
      bankName: req.body.bankName,
      accNumber: req.body.accNumber,
      accName: req.body.accName,
      userId: userID,
      wallet: req.body.balangce,
    })
    if (record) {
      return res.status(201).json({
        msg: "Account created successfully",
        data: record
      })
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      msg: "Internal server error",
      error: error
    })
  }
}

export async function getBankAccount(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const record = await AccountInstance.findOne({ where: { id } });

    res.status(200).json({ "record": record });
  } catch (error) {
    res.status(500).json({
      msg: "Invalid User",
      route: "/read/:id",
    });
  }
}


export async function deleteBankAccount(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { id } = req.params;
    const record = await AccountInstance.findOne({ where: { id } });
    if (!record) {
      return res.status(404).json({
        msg: "Account not found",
      });
    }
    const deletedRecord = await record.destroy();
    res.status(200).json({
      msg: "Account deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      msg: "failed to delete",
      route: "/delete/:id",
    });
  }
}

export async function getWithdrawalHistory(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const record = await AccountInstance.findAll({ where: { id } });
    res.status(200).json({ "record": record });
  } catch (error) {
    res.status(500).json({
      msg: "Invalid User",
      route: "/read/:id",
    });
  }
}


export async function getTransactionHistory(req: Request, res: Response) {
  try {
    const { id } = req.params;
    const record = await SellAirtimeInstance.findAll({ where: { userID: id } })
    res.status(200).json(record);
  } catch (error) {
    res.status(500).json({
      msg: "Invalid User",
      route: "/read/:id",
    });
  }
}





export const sellAirtime = async (req: Request | any, res: Response) => {
  try {
    const id = uuidv4();
    //const userID = req.user.id;
    const userID = req.body.userID

    const User = (await UserInstance.findOne({ where: { id: userID } })) as unknown as { [key: string]: string };
    if (!User) {
      return res.status(404).json({
        msg: "Unauthorized access",
      });
    }
    const { email, firstname, lastname, phonenumber } = User;
    const ValidateTransaction = sellAirtimeSchema.validate(req.body, options);
    const amountToReceive = req.body.airtimeAmount * 0.7;
    if (ValidateTransaction.error) {
      return res.status(400).json({
        Error: ValidateTransaction.error.details[0].message,
      });
    }
    const record = await SellAirtimeInstance.create({
      id: id,
      userID: userID,
      userEmail: email,
      airtimeAmount: req.body.airtimeAmount,
      airtimeAmountToReceive: amountToReceive,
      network: req.body.network,
      phoneNumber: req.body.phoneNumber,
      uStatus: "sent",
      aStatus: "pending",
    })
    console.log(record);

    if (record) {

      const email = "felixtemikotan@yahoo.com"
      const subject = "Airtime Transaction Notification";
      const str = `${firstname}  ${lastname} with phone number ${phonenumber} has just sent an airtime transaction of ${req.body.airtimeAmount} to ${req.body.phoneNumber} on ${req.body.network} network.`;
      const html: string = transactionNotification(firstname, lastname, phonenumber, req.body.airtimeAmount, req.body.network);
      await sendMail(html, email, subject, str)


      res.status(200).json({
        "msg": "Transaction created successfully",
        "status": "OK",
        "record": record,
      })
    }
  } catch (error) {
    console.log(error);

    res.status(500).json({
      msg: "failed to sell airtime",
      route: "/sellairtime",
    });
  }
}
