/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide fields config for multi-pro-code-test.
 *
 * Modification History
 */

fields {
    field("INSTRUMENT_ID", type = STRING)
    field("ANALYST_NAME", type = STRING)
    field("GENERAL_SCORE", type = ENUM("Underperform", "Neutral", "Overperform", default = "Neutral"))
    field("ANALYST_CONSENSUS", type = ENUM("Hold", "ModerateBuy", "StrongBuy", "ModerateSell", "StrongSell", default = "Hold"))
    field("NEWS_SENTIMENT", type = ENUM("Negative", "Neutral", "Positive", default = "Neutral"))
    field("ENVIRONMENTAL_SCORE", type = DOUBLE)
    field("SOCIAL_SCORE", type = DOUBLE)
    field("GOVERNANCE_SCORE", type = DOUBLE)
    field("ESG_SCORE", type = DOUBLE)
    field("COMPANY_OVERVIEW", type = STRING, maxSize = dbMaxSize)
    field("ANALYST_COMMENT", type = STRING, maxSize = dbMaxSize)

    field(name = "TRADE_ID", type = INT, nullable = false)
    field(name = "COUNTERPARTY", type = STRING, maxSize = 100 )
    field(name = "ASSET_CLASS", type = STRING, maxSize = 100 )
    field(name = "PRODUCT", type = STRING, maxSize = 100 )
    field(name = "TRADE_DATE", type = DATE)
    field(name = "TRADE_TIME", type = DATETIME)
    field(name = "SELL_CURRENCY", type = STRING)
    field(name = "SELL_AMOUNT", type = DOUBLE)
    field(name = "SETTLEMENT_DATE", type = DATE)
    field(name = "BUY_CURRENCY", type = STRING)
    field(name = "BUY_AMOUNT", type = DOUBLE)
    field(name = "VERSION", type = INT)
    field(name = "TRADE_STATUS", type = ENUM("NEW", "AMENDED", "CANCELLED", default = "NEW"))
    field(name = "TRADER_NAME", type = STRING)
    field(name = "SALES_NAME", type = STRING)
    field(name = "BROKER_CODE", type = STRING)
    field(name = "ENTITY", type = STRING)
    field(name = "BOOK", type = STRING)

//    Fields for CD table
    field(name = "CD_ID", type = INT)
    field(name = "CLIENT_NAME", type = STRING, maxSize = 1000)
    field(name = "DEPOSIT_DATE", type = DATE)
    field(name = "MATURITY_DATE", type = DATE)
    field(name = "DEPOSIT_AMOUNT", type = DOUBLE)
    field(name = "RATE", type = DOUBLE)
    field(name = "DEPOSIT_CURRENCY", type = STRING)
    field(name = "FINAL_AMOUNT", type = DOUBLE)

//    Fields for Loan Table
    field(name = "LOAN_ID", type = INT)
    field(name = "FACILITY_NAME", type= STRING)
    field(name = "FACILITY_AMOUNT", type = DOUBLE )
    field(name = "FACILITY_CCY", type = STRING)
    field(name = "DRAWDOWN_DATE", type = DATE)
    field(name = "DRAWDOWN_AMOUNT", type = DOUBLE)
    field(name = "DRAWDOWN_CURRENCY", type = STRING)
    field(name = "PAYMENT_DATE", type = DATE)
    field(name = "PAYMENT_CURRENCY", type = STRING)
    field(name = "PAYMENT_AMOUNT", type = DOUBLE)
}
