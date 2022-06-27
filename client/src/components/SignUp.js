import React, {useState} from "react";


const SignUp = () => {
    const [user, setUser] = useState(null);
    const signUp = () => {
    }
    return (
        <div className={SignUp}>
            <label>SignUp</label>
            <form>
                <input
                    placeholder="First Name" onChange={(event => {
                        setUser({ ...user, firstName: event.target.value});
                })}
                />
                <input
                    placeholder="Last Name" onChange={(event => {
                    setUser({ ...user, firstName: event.target.value});
                })}
                />
                <input
                    placeholder="userName" onChange={(event => {
                    setUser({ ...user, firstName: event.target.value});
                })}
                />
                <input
                    placeholder="password"
                    type={"password"}
                    onChange={(event => {
                    setUser({ ...user, firstName: event.target.value});
                })}

                />
                <button onClick={signUp}> SignUP </button>
            </form>
            </div>
    )
}


export default SignUp;