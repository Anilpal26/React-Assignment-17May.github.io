function PasswordMacher() {
    const [pass1, setPass1] = React.useState("");
    const [pass2, setPass2] = React.useState("");
    return (
        <div>
            <h1>This is Password Matcher</h1>
            <input type="text" onKeyUp={e => setPass1(e.target.value)} />
            <input type="text" onKeyUp={e => setPass2(e.target.value)} />
            <p className="passColor">{pass1 === pass2 ? "Password is Match" : "Password is Not Match"}</p>
            <br />
            <br />
            <br />
        </div>
    )
}