/**
 * System              : Genesis Business Library
 * Sub-System          : multi-pro-code-test Configuration
 * Version             : 1.0
 * Copyright           : (c) Genesis
 * Date                : 2022-03-18
 * Function : Provide table definition config for multi-pro-code-test.
 *
 * Modification History
 */

tables {
    table(name ="ANALYSIS", id = 11001) {
        INSTRUMENT_ID not null
        ANALYST_NAME not null
        GENERAL_SCORE not null
        ANALYST_CONSENSUS
        NEWS_SENTIMENT
        ENVIRONMENTAL_SCORE
        SOCIAL_SCORE
        GOVERNANCE_SCORE
        ESG_SCORE
        COMPANY_OVERVIEW
        ANALYST_COMMENT

        primaryKey {
            INSTRUMENT_ID
        }
    }

    table(name = "TRADE", id=11003){
        autoIncrement(TRADE_ID)
        COUNTERPARTY
        ASSET_CLASS
        PRODUCT
        TRADE_DATE
        TRADE_TIME
        SELL_CURRENCY
        SELL_AMOUNT
        SETTLEMENT_DATE
        BUY_CURRENCY
        BUY_AMOUNT
        VERSION
        TRADE_STATUS
        TRADER_NAME
        SALES_NAME
        BROKER_CODE
        BOOK
        primaryKey {
            TRADE_ID
        }
    }

    table(name = "CD", id = 11005){
        autoIncrement(CD_ID)
        CLIENT_NAME
        DEPOSIT_DATE
        MATURITY_DATE
        PRODUCT
        DEPOSIT_AMOUNT
        RATE
        DEPOSIT_CURRENCY
        FINAL_AMOUNT
        primaryKey {
            CD_ID
        }
    }

    table(name = "LOAN", id = 11007){
        autoIncrement(LOAN_ID)
        CLIENT_NAME
        FACILITY_NAME
        FACILITY_AMOUNT
        FACILITY_CCY
        DRAWDOWN_DATE
        DRAWDOWN_AMOUNT
        DRAWDOWN_CURRENCY
        PAYMENT_DATE
        PAYMENT_CURRENCY
        PAYMENT_AMOUNT
        primaryKey {
            LOAN_ID
        }
    }
}
