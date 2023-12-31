// const BASE_PATH = process.env.NODE_ENV === "production" ? "https://port-0-yj-react-project4-back-eu1k2lll079pdn.sel4.cloudtype.app": "http://localhost:8080";
const BASE_PATH =
    process.env.NODE_ENV === "production"
        ? "https://regal-bienenstitch-5b5903.netlify.app"
        : "http://localhost:8080";

export async function rentalNotices() {
    return await fetch(`http://localhost:8080/api/rental/notice`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    }).then((res) => res.json());
}

export async function rentalNoticeDetail(props) {
    const id = props.queryKey[1];
    console.log(props);
    return await fetch(`${BASE_PATH}/api/rental/notice-detail/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    }).then((res) => res.json());
}

export async function rentalNoticeWrite(props) {
    console.log(props);
    return await fetch(`${BASE_PATH}/api/rental/notice-write`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(props),
    }).then((res) => res.json());
}

export async function userRegister(props) {
    return await fetch(`${BASE_PATH}/api/users/register`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(props),
    }).then((res) => res.json());
}

export async function userSignIn(props) {
    console.log(props);
    return await fetch(`${BASE_PATH}/api/users/signin`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(props),
    }).then((res) => res.json());
}

export async function loginSuccess() {
    return await fetch(`${BASE_PATH}/api/users/login/success`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    }).then((res) => res.json());
}

export async function logout() {
    return await fetch(`${BASE_PATH}/api/users/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
    }).then((res) => res.json());
}

export async function kakaoLogin(code) {
    return await fetch(`${BASE_PATH}/api/users/kakao`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        body:JSON.stringify({ code })
    }).then((res) => res.json());
}