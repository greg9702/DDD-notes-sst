export interface UseCase<RequestInterface, ResponseInterface> {
  execute(
    request?: RequestInterface
  ): Promise<ResponseInterface> | ResponseInterface;
}
