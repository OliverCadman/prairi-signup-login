import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "us-east-2_J8WefoREZ",
  ClientId: "335kvve3j4ss55pimrng219p48",
};

export default new CognitoUserPool(poolData);
