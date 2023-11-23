class ServiceResponse<T> {
    data?: T|null;
    message: string = "";
    success: boolean = false;
}

export default ServiceResponse;