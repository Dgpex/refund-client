import { useState } from "react";
import DisclaimerModal from "./DisclaimerModal";
import "./Form.css";

function InputGroup2({
  label,
  name,
  value,
  onChange,
  onFocus,
  onBlur,
  type = "text",
  error,
  inputClassName = "",
  disabled,
  onMouseOver,
  onMouseLeave,
  onInput,
}) {
  return (
    <div className="w-full mb-4">
      <input
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onMouseOver={onMouseOver}
        onMouseLeave={onMouseLeave}
        onFocus={onFocus}
        onBlur={onBlur}
        onInput={onInput}
        type={type}
        placeholder={label}
        aria-label={label}
        className={`block w-full py-3 px-3 rounded-md text-gray-600 bg-white border border-gray-400 focus:border-red-400 focus:outline-none focus:ring-0 transition-colors duration-300 ${
          disabled ? "bg-gray-200" : ""
        } ${inputClassName} ${error ? "border-red-500" : ""}`}
        disabled={disabled}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    mobile_number: "",
    address: "",
    city: "",
    state: "",
    country: "INDIA",
    postal_code: "",
    account_number: "",
    name_as_per_bank: "",
    ifsc_code: "",
    name_as_per_bond: "",
    fathers_name: "",
    aadhaar_number: "",
    invested_amount: "",
    invested_date: "",
    monthly_received_amount: "",
    agent_name: "",
    agent_mobile_number: "",
    sub_agent_name: "",
    bond_reference_number: "",
  });

  const [errors, setErrors] = useState({});
  const [isChecked, setIsChecked] = useState(true);
  const [Modal, setModal] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [fileError, setFileError] = useState("");
  const [paymentFile, setPaymentFile] = useState(null);

  const handleInputAlphabetChange = (e) => {
    const { name, value } = e.target;
    e.target.value = value.replace(/[^a-zA-Z\s]/g, "");

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputNumberChange = (e) => {
    const { name, value } = e.target;
    e.target.value = value.replace(/[^0-9]/g, "");

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleInputAlphaNumericChange = (e) => {
    const { value } = e.target;
    // Replace any non-alphanumeric characters (excluding spaces) with an empty string
    // Limit the length to 6 characters and ensure it's alphanumeric
    // if (e.target.name == formData.bond_reference_number <= 6 && alphanumericRegex.test(inputValue)) {
    //   setValue(inputValue);
    // }
    e.target.value = value.replace(/[^a-zA-Z0-9]/g, "");
    // Call the onChange handler to update the state
    if (onChange) {
      onChange(e);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSelectChange = (e) => {
    setIsOnline(e.target.value === "online");
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && !file.type.startsWith("image/")) {
      setFileError("Only image files are allowed.");
    } else {
      setFileError("");
      setPaymentFile(URL.createObjectURL(e.target.files[0]));
    }
  };

  const validateField = (name, value) => {
    const alphaRegex = /^[a-zA-Z\s]+$/;
    const numericRegex = /^\d+$/;

    switch (name) {
      case "mobile_number":
        return !/^\d{10}$/.test(value)
          ? "Mobile number must be 10 digits."
          : "";
      case "account_number":
        return value && !numericRegex.test(value)
          ? "Account number must be a number."
          : "";
      case "invested_amount":
        return value && !numericRegex.test(value)
          ? "Invested amount must be a number."
          : "";
      // case "invested_date":
      //   return value && !/^\d{2}-\d{2}-\d{4}$/.test(value)
      //     ? "Date must be in dd-mm-yyyy format."
      //     : "";
      case "agent_mobile_number":
        return value && !/^\d{10}$/.test(value)
          ? "Invalid agent mobile number. Must be 10 digits."
          : "";
      case "aadhaar_number":
        return value && !/^\d{12}$/.test(value)
          ? "Invalid Aadhaar number. Must be 12 digits."
          : "";
      case "postal_code":
        return value && !/^\d{6}$/.test(value)
          ? "Invalid postal code. Must be 6 digits."
          : "";
      case "name":
      case "city":
      case "country":
      case "name_as_per_bond":
      case "name_as_per_bank":
      case "fathers_name":
      case "sub_agent_name":
      case "agent_name":
        return !alphaRegex.test(value)
          ?` ${name.replace(/_/g, " ")} must contain only alphabets.`
          : "";
      case "monthly_received_amount":
        return value && !numericRegex.test(value)
          ? "Should be only a number"
          : "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    let newErrors = {};

    // Check if all fields are filled
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        newErrors[key] = "This field is required.";
      } else {
        const error = validateField(key, value);
        if (error) newErrors[key] = error;
      }
    });

    // Check for file errors
    if (fileError) {
      alert(fileError);
      return false;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit form data
      console.log("Form submitted", formData);
    } else {
      alert("Please fill out all fields correctly.");
    }
  };

  return (
    <div className="flex justify-center w-full h-max bg-gray-300">
      <div className="flex flex-col lg:w-1/2 m-auto shadow-black shadow-2xl my-4 bg-white items-left justify-left">
        <div className=" bg-gradient-to-br from-emerald-400 to-emerald-600 py-8 flex items-center justify-center">
          <h3 className="lg:text-3xl text-white text-2xl font-bold">
            Refund Claim Application
          </h3>
        </div>

        <form
          onSubmit={handleSubmit}
          className="text-left md:p-5 sm:p-10 space-y-4 gap-0"
        >
          {Modal && <DisclaimerModal setModal={setModal} />}
          <div className="space-y-4 w-full">
            <h3 className="text-2xl text-emerald-600 font-bold">
              Enter Your Details
            </h3>
            <div className="flex gap-4">
              <InputGroup2
                name="name"
                label="Full Name"
                value={formData.name}
                onChange={handleInputAlphabetChange}
                onInput={handleInputChange}
                onBlur={handleBlur}
                error={errors.name}
              />
              <InputGroup2
                type="number"
                name="mobile_number"
                label="Mobile Number"
                value={formData.mobile_number}
                onInput={handleInputNumberChange}
                max="10"
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.mobile_number}
              />
            </div>
            <div className="gap-2 space-y-2">
              <h3 className="text-2xl text-emerald-600 font-bold">Address</h3>
              <InputGroup2
                name="address"
                label="H.No, Street, Address Line"
                value={formData.address}
                onChange={handleInputChange}
                onInput={handleInputChange}
                onBlur={handleBlur}
                error={errors.address}
              />
              <div className="grid grid-cols-2 gap-2">
                <InputGroup2
                  name="city"
                  label="City"
                  value={formData.city}
                  onInput={handleInputAlphabetChange}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.city}
                />
                <div className="  ">
                  <select
                    name="state"
                    id="state"
                    className=" w-full form-control border-2 p-3 rounded-lg  "
                  >
                    <option value="Karnataka">Karnataka</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Andaman and Nicobar Islands">
                      Andaman and Nicobar Islands
                    </option>
                    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Chandigarh">Chandigarh</option>
                    <option value="Chhattisgarh">Chhattisgarh</option>
                    <option value="Dadar and Nagar Haveli">
                      Dadar and Nagar Haveli
                    </option>
                    <option value="Daman and Diu">Daman and Diu</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Lakshadweep">Lakshadweep</option>
                    <option value="Puducherry">Puducherry</option>
                    <option value="Goa">Goa</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Haryana">Haryana</option>
                    <option value="Himachal Pradesh">Himachal Pradesh</option>
                    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                    <option value="Jharkhand">Jharkhand</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Madhya Pradesh">Madhya Pradesh</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Manipur">Manipur</option>
                    <option value="Meghalaya">Meghalaya</option>
                    <option value="Mizoram">Mizoram</option>
                    <option value="Nagaland">Nagaland</option>
                    <option value="Odisha">Odisha</option>
                    <option value="Punjab">Punjab</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Tamil Nadu">Tamil Nadu</option>
                    <option value="Telangana">Telangana</option>
                    <option value="Tripura">Tripura</option>
                    <option value="Uttar Pradesh">Uttar Pradesh</option>
                    <option value="Uttarakhand">Uttarakhand</option>
                    <option value="West Bengal">West Bengal</option>
                  </select>
                </div>
                <InputGroup2
                  name="country"
                  label="Country"
                  value={formData.country}
                  onBlur={handleBlur}
                  error={errors.country}
                />
                <InputGroup2
                  type="number"
                  name="postal_code"
                  label="ZIP/Postal Code"
                  value={formData.postal_code}
                  onInput={handleInputNumberChange}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.postal_code}
                />
              </div>
            </div>
          </div>
          <h3 className="text-2xl text-emerald-600 font-bold">Bank Details</h3>
          <div className="grid grid-cols-2 gap-2">
            <InputGroup2
              name="name_as_per_bank"
              label="Name As Per Bank"
              value={formData.name_as_per_bank}
              onChange={handleInputChange}
              onInput={handleInputAlphabetChange}
              onBlur={handleBlur}
              error={errors.name_as_per_bank}
            />

            <InputGroup2
              type="number"
              name="account_number"
              label="Account Number"
              value={formData.account_number}
              onInput={handleInputNumberChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.account_number}
            />
            <InputGroup2
              name="ifsc_code"
              label="IFSC Code"
              value={formData.ifsc_code}
              onChange={handleInputChange}
              onInput={handleInputAlphaNumericChange}
              onBlur={handleBlur}
              error={errors.ifsc_code}
            />
          </div>
          <h3 className="text-2xl text-emerald-600 font-bold pt-2">
            Details As Per Bond
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <InputGroup2
              name="name_as_per_bond"
              label="Name As Per Bond/Agreement/E-Stamp"
              value={formData.name_as_per_bond}
              onInput={handleInputAlphabetChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.name_as_per_bond}
            />
            <InputGroup2
              name="fathers_name"
              label="Father's Name"
              value={formData.fathers_name}
              onInput={handleInputAlphabetChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.fathers_name}
            />
            <InputGroup2
              type="number"
              name="aadhaar_number"
              label="Aadhaar Number As Per Bond"
              value={formData.aadhaar_number}
              onInput={handleInputNumberChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.aadhaar_number}
            />
            <InputGroup2
              type="text"
              name="bond_reference_number"
              label="Bond Reference Number"
              value={formData.bond_reference_number}
              maxLength={6}
              onInput={handleInputAlphaNumericChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.bond_reference_number}
            />
            <div className="col-span-2 md:flex md:gap-4">
              <InputGroup2
                name="invested_amount"
                label="Invested Amount"
                value={formData.invested_amount}
                onInput={handleInputNumberChange}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.invested_amount}
              />
              <select
                className="p-2 mt-3 lg:mt-0 lg:w-auto w-full border-2  md:h-3/4 flex"
                onChange={handleSelectChange}
              >
                <option value="">Payment Method</option>
                <option value="online">Online</option>
                <option value="cash">Cash</option>
              </select>
              {isOnline && (
                <div className=" w-full flex flex-col">
                  <div className="flex w-full border-2 h-3/4 items-center bg-gray-300 rounded-md justify-center">
                    <label htmlFor="file">Upload Documents</label>
                    <input
                      id="file"
                      type="file"
                      className="p-2 hidden"
                      multiple
                      onChange={handleFileChange}
                    />
                  </div>
                  {fileError ? (
                    <span className="text-red-500 mt-2 text-sm">
                      {fileError}
                    </span>
                  ) : (
                    <a
                      href={paymentFile}
                      className=" text-blue-700 italic"
                      target="_blank"
                    >
                      {paymentFile}
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label>Invested Date</label>
              <InputGroup2
                placeholder="Invested Date"
                type="date"
                name="invested_date"
                label="Invested Date"
                value={formData.invested_date}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.invested_date}
              />
            </div>
            <div className="flex items-center justify-center lg:mt-6">
              <InputGroup2
                type="number"
                name="monthly_received_amount"
                label="Enter Amount You Received Monthly"
                value={formData.monthly_received_amount}
                onInput={handleInputNumberChange}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.monthly_received_amount}
              />
            </div>
            <InputGroup2
              name="agent_name"
              label="Agent Name"
              value={formData.agent_name}
              onInput={handleInputAlphabetChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.agent_name}
            />
            <InputGroup2
              type="number"
              name="agent_mobile_number"
              label="Agent Mobile Number"
              value={formData.agent_mobile_number}
              onInput={handleInputNumberChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.agent_mobile_number}
            />
            <InputGroup2
              name="sub_agent_name"
              label="Sub-Agent Name (if applicable)"
              value={formData.sub_agent_name}
              onInput={handleInputAlphabetChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.sub_agent_name}
            />
            <div className="lg:w-full h-max items-center justify-center flex">
              <label
                htmlFor="bond_file"
                className="bg-gray-300 p-4 text-sm px-4 rounded-lg hover:cursor-pointer hover:ring-2 hover:ring-blue-500"
              >
                Upload Your Bond/Agreement
              </label>
              <input
                id="bond_file"
                className="p-2 hidden"
                type="file"
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <div>
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="terms">
                I confirm that all the information provided is accurate and true
                to the best of my knowledge. I understand that any incorrect or
                incomplete information may result in the rejection of my claim
                or a delay in processing.
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                id="terms2"
                name="terms2"
                checked={isChecked}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <label htmlFor="terms2">
                I confirm that all the information provided is accurate and true
                to the best of my knowledge. I understand that any incorrect or
                incomplete information may result in the rejection of my claim
                or a delay in processing. I have read and understood the
                disclaimer and agree to abide by the terms and conditions of the
                Darwesh Group's Online Investment Claim Portal.
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="md:w-1/2 w-full text-xl rounded-lg p-2 border-2 bg-blue-700 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;