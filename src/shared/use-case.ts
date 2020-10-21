export interface UseCase<Input, Output> {
  /**
   * @throws Error
   */
  execute(data?: Input): Promise<Output> | Output;
}
