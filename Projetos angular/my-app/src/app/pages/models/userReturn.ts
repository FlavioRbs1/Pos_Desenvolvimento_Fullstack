export class UserReturn{

    constructor(public kind: string, public users?:UserEntity[]){
        
    }
}
export interface UserEntity{
    localId:string;
    email:string;
    passwordHash:string;
    emailVerified:boolean;
    passwordUpdatedAt:number;
    providerUserInfo?: (ProviderUserInfoEntity)[] | null;
    validSince:string;
    lastLoginAt:string;
    createdAt:string;
    lastRefreshAt:string;
}
export interface ProviderUserInfoEntity{
    provideId:string;
    federatedId:string;
    email:string;
    rawId:string;
}