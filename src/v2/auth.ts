export default class AuthState {
  private _accessToken?: string;
  private _refreshToken = "";
  private _expiresIn: Date | null = null;
  private _refreshExpiresIn: Date | null = null;

  public get accessToken() {
    return this._accessToken;
  }
}
