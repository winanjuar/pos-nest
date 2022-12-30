import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const SellProcess = createParamDecorator(
  (data: any, ctx: ExecutionContext) => {
    const req = ctx.switchToHttp().getRequest();
    const user = { id: req.user.id };
    req.body.user = user;

    let total_transaction = 0;
    let total_discount = 0;
    let total_payment = 0;

    req.body.items.forEach((element: any) => {
      total_transaction += parseFloat(element.qty) * parseFloat(element.price);
      total_discount += parseFloat(element.discount);
      element.user = user;
    });

    req.body.payments.forEach((element: any) => {
      total_payment += parseFloat(element.total);
      element.user = user;
    });

    req.body.total_transaction = total_transaction;
    req.body.total_discount = total_discount;
    req.body.total_payment = total_payment;

    return req.body;
  },
);
