// import { Request, Response} from 'express';
// import TransactionSchema from '../models/AllTransactionSchema';

// export async function AllTransactions(req: Request, res: Response) {
//   {
//     const AllTransactions = await TransactionSchema.findAll();

//     res.send(AllTransactions);
//   }
// }


export async function allTransactions(req: Request | any, res: Response, next: NextFunction) {
  try {
    const pageAsNumber = Number.parseInt(req.query.page);
    const sizeAsNumber = Number.parseInt(req.query.size);
    let page = 0;
    if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
      page = pageAsNumber;
    }
    let size = 15;
    if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0 && sizeAsNumber < 15) {
      size = sizeAsNumber;
    }
   const transactions = await SellAirtimeInstance.findAndCountAll({
      limit: size,
      offset: page * size,
    });
    if (!transactions) {
      return res.status(404).json({ message: 'No transaction found' });
    }
    return res.send ({
      content: transactions.rows,
      totalPages: Math.ceil(transactions.count / size),
    })
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      message: error,
    });
  }
}

