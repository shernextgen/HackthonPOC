import React, { useState } from 'react';

const ActivationPage = () => {
    const [otp, setOtp] = useState({ value: '', otp1: "", otp2: "", otp3: "", otp4: "" });
    const [isSuccess, setIsSuccess] = useState(false)
    const handleChange = (value1, event) => {
        // setOtp({ [value1]: event.target.value });
        setOtp({
            ...otp,
            [value1]: event.target.value
          })
    }

    const handleSubmit = (event) => {
        const data = new FormData(event.target);
        console.log("otp-", otp);
        event.preventDefault();
        setIsSuccess(true)
    }

    const inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {

                elmnt.target.form.elements[next].focus()
            }
        }
        else {
            const next = elmnt.target.tabIndex;
            if (next < 5) {
                elmnt.target.form.elements[next].focus()
            }
        }

    }

    return (
        <div className="container otp-container">
            {isSuccess ? <div className="welcome-text">Congratulations! You are successfully onboarded!!</div>
            : <><div className="welcome-text">Complete Your Onboarding Process</div>
            <div>Enter your One Time Password</div>
            <form onSubmit={handleSubmit}>
                <div className="otpContainer">
                    <input
                        name="otp1"
                        type="text"
                        autoComplete="off"
                        className="otpInput"
                        value={otp.otp1}
                        onChange={e => handleChange("otp1", e)}
                        tabIndex="1" maxLength="1" onKeyUp={e => inputfocus(e)}

                    />
                    <input
                        name="otp2"
                        type="text"
                        autoComplete="off"
                        className="otpInput"
                        value={otp.otp2}
                        onChange={e => handleChange("otp2", e)}
                        tabIndex="2" maxLength="1" onKeyUp={e => inputfocus(e)}

                    />
                    <input
                        name="otp3"
                        type="text"
                        autoComplete="off"
                        className="otpInput"
                        value={otp.otp3}
                        onChange={e => handleChange("otp3", e)}
                        tabIndex="3" maxLength="1" onKeyUp={e => inputfocus(e)}

                    />
                    <input
                        name="otp4"
                        type="text"
                        autoComplete="off"
                        className="otpInput"
                        value={otp.otp4}
                        onChange={e => handleChange("otp4", e)}
                        tabIndex="4" maxLength="1" onKeyUp={e => inputfocus(e)}
                    />
                </div>
                <input type="submit" className="btn btn-primary"/>
            </form></>}
        </div>

    )
}

export default ActivationPage;