export interface ApiEndpoint {
    key: string,
    endpoint: string
}

export interface ApiLoginResponse {
    token: string
}

export interface ApiLogin {
    email: string,
    password: string
}

export interface ApiPagination<T> {
    current_page: string,
    data: T,
    first_page_url: string,
    from: string,
    last_page: string,
    last_page_url: string,
    links: {active: boolean, label: string, url: string|null}[],
    next_page_url: string|null,
    path: string,
    per_page: string,
    prev_page_url: string|null,
    to: string,
    total: string,
}
