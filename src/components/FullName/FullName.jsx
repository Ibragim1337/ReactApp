function FullName({name, surname}) {
    const fullName = name + ' ' + surname;

    return (
        <div className="full-name">
            {fullName}
        </div>
    )
}

export default FullName;