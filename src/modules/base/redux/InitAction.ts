class InitAction {
  _actionList: any;
  constructor() {
    this._actionList = [];
  }
  register(action: any) {
    this._actionList.push(action);
  }
  process(dispatch: any) {
    this._actionList.forEach((action: any) => dispatch(action()));
  }
}

export default new InitAction();
