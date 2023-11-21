class ServiceResponse<T> {
    data?: T;
    message: string = "";
    success: boolean = false;
}

export default ServiceResponse;