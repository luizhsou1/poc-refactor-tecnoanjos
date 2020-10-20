export interface UseCase<Input, Output> {
  /**
   * @throws Domain Error
   */
  execute(data?: Input): Promise<Output>;
}
