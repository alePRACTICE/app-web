import { AccountRespondse } from "../../account/model/account-response.model";

export interface TranferResponse{
    id:number;
    targetAccount: AccountResponse;
    amount:AccountRespondse;
    description:string;
    
    }