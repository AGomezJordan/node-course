interface CheckServiceInterface {
  execute (url: string): Promise<boolean>
}

type SucessCallBackType = () => void;
type ErrorCallBackType = (error: string) => void;

export class CheckService implements CheckServiceInterface {
  constructor (
    private readonly successCallBack: SucessCallBackType,
    private readonly errorCallBack: ErrorCallBackType
  ) {}

  async execute (url: string): Promise<boolean> {
    try {
      const request = await fetch(url);
      if (request.ok) {
        this.successCallBack();
        return true;
      } else {
        throw new Error(`Error on check service: ${url}`);
      }
    } catch (error) {
      this.errorCallBack(`${error}`);
      return false;
    }
  }
}