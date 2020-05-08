export class PaginationUtils {

  private static readonly HEADER_X_TOTAL_COUNT = 'X-Total-Count';

  private constructor () { }

  public static getXTotalCount(resp: any): number {
    if  (!resp) {
      return null;
    }
    return +resp.headers.get(PaginationUtils.HEADER_X_TOTAL_COUNT);
  }
}
