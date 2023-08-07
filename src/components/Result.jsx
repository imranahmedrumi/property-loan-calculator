import { Stack, Typography } from "@mui/material";
import React from 'react';

const Result = ({ data }) => {

  const { homeValue, downPayment, loanAmount, loanTerm, interestRate } = data;

  const totalLoanMonths = loanTerm * 12; //5 Years = 60 months.
  const interestPerMonth = interestRate / 100 / 12 //100 $ Loan with 12% interest for 12 months.

  //Formula for calculation//

  const monthlyPayment =
    (loanAmount *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1);

  const totalInterestGenerated = monthlyPayment * totalLoanMonths - loanAmount;
  return (
    <Stack>
      <Typography textAlign="center" variant="h5">
        Monthly Payment: ${monthlyPayment.toFixed(2)}
      </Typography>
    </Stack>
  );
};

export default Result;