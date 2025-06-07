const StoreInfo = ({ label, info }) => {
    return (
        <div>
            <label className="block text-sm font-medium text-gray-600">{label}</label>
            <p className="text-lg font-semibold">{info}</p>
        </div>
    )
}

export default StoreInfo