import { useState } from "react";
import DisclaimerModal from "./DisclaimerModal";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";
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
  inputLabel,
}) {
  return (
    <div className="w-full mb-4">
      <label>{inputLabel}</label>
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
    houseAddress: "",
    city: "",
    state: "Karnataka",
    country: "INDIA",
    postal_code: "",
    name_as_per_bond: "",
    fathers_name: "",
    invested_amount: "",
    invested_date: "",
    monthly_received_amount: "",
    agent_name: "",
    agent_mobile_number: "",
    sub_agent_name: "",
    bond_reference_number: "",
    paymentFiles: [],
    bondFiles: [],
  });

  const [errors, setErrors] = useState({});
  const [Modal, setModal] = useState(true);
  const [isOnline, setIsOnline] = useState(false);
  const [fileError, setFileError] = useState("");
  const [paymentFile, setPaymentFile] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState(""); // "" | "cash" | "online"
  const [termsAccepted, setTermsAccepted] = useState(true);
  const [conditionsAccepted, setConditionsAccepted] = useState(true);

  const api = process.env.REACT_APP_API_HOST;

  const token = useSelector((state) => state.auth.token);

  const handleInputAlphabetChange = (e) => {
    const { name, value } = e.target;
    const newValue = value.replace(/[^a-zA-Z\s]/g, "");
    e.target.value = newValue;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleInputMobileNumberChange = (e) => {
    const { name, value } = e.target;
    const newValue = value.replace(/[^0-9]/g, "").slice(0, 10);
    e.target.value = newValue;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleInputZipCodeChange = (e) => {
    const { name, value } = e.target;
    const newValue = value.replace(/[^0-9]/g, "").slice(0, 6);
    e.target.value = newValue;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleInputNumberChange = (e) => {
    const { name, value } = e.target;
    const newValue = value.replace(/[^0-9]/g, "");
    e.target.value = newValue;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleInputAlphaNumericChange = (e) => {
    const { name, value } = e.target;
    const newValue = value.replace(/[^a-zA-Z0-9]/g, "");
    e.target.value = newValue;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (e) => {
    setPaymentMethod(e.target.value);
    setIsOnline(e.target.value === "online");
  };

  const handleTermsCheckboxChange = (e) => {
    setTermsAccepted(e.target.checked);
  };

  const handleConditionsCheckboxChange = (e) => {
    setConditionsAccepted(e.target.checked);
  };

  const handleFileChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);

    if (e.target.name === "paymentFiles") {
      if (paymentMethod === "online") {
        const nonImageFile = fileArray.find(
          (file) => !file.type.startsWith("image/")
        );
        if (nonImageFile) {
          setFileError("Only image files are allowed.");
        } else {
          setFileError("");
          setFormData((prevFormData) => ({
            ...prevFormData,
            paymentFiles: fileArray,
          }));
        }
      } else if (paymentMethod === "cash") {
        setFormData((prevFormData) => ({
          ...prevFormData,
          paymentFiles: [], // Clear paymentFiles if 'cash' is selected
        }));
      }
    }

    if (e.target.name === "bondFiles") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        bondFiles: fileArray,
      }));
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
      case "invested_amount":
        return value && !numericRegex.test(value)
          ? "Invested amount must be a number."
          : "";
      case "agent_mobile_number":
        return value && !/^\d{10}$/.test(value)
          ? "Invalid agent mobile number. Must be 10 digits."
          : "";
      case "postal_code":
        return value && !/^\d{6}$/.test(value)
          ? "Invalid postal code. Must be 6 digits."
          : "";
      case "name":
      case "city":
      case "country":
      case "name_as_per_bond":
      case "fathers_name":
      case "sub_agent_name":
      case "agent_name":
        return !alphaRegex.test(value)
          ? `${name.replace(/_/g, " ")} must contain only alphabets.`
          : "";
      case "monthly_received_amount":
        return value && !numericRegex.test(value)
          ? "Should be only a number."
          : "";
      default:
        return "";
    }
  };

  const validateForm = () => {
    let newErrors = {};

    // Check if all fields are filled
    Object.entries(formData).forEach(([key, value]) => {
      if (!value && key !== "paymentFiles" && key !== "bondFiles") {
        // Skip validation for paymentFiles and bondFiles here
        newErrors[key] = "This field is required.";
      } else {
        const error = validateField(key, value);
        if (error) newErrors[key] = error;
      }
    });

    // Check for paymentFiles errors based on paymentMethod
    if (
      paymentMethod === "online" &&
      (!formData.paymentFiles || formData.paymentFiles.length === 0)
    ) {
      newErrors.paymentFiles = "Please upload an image file.";
    }

    if (fileError) {
      alert(fileError);
      return false;
    }

    // Check if terms and conditions are accepted
    if (!termsAccepted) {
      alert("You must accept the Terms and Conditions.");
      newErrors.termsAccepted = "You must accept the terms and conditions.";
    }

    if (!conditionsAccepted) {
      alert("You must accept the Terms and Conditions.");
      newErrors.conditionsAccepted = "You must accept the conditions.";
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        console.log("submitting...", formData);
        const res = await axios.post(
          `${api}/api/claim/save-claim-details`,
          { formData },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        console.log(res.data);

        await Swal.fire({
          title: "Success!",
          text: "Form Submitted Successfully!",
          icon: "success",
        });

        window.location.href = "/track";
      } catch (error) {
        console.error("Error submitting form", error);
        alert("An error occurred while submitting the form. Please try again.");
      }
    } else {
      alert("Please fill out all fields correctly.");
      console.log("Form error", formData);
    }
  };

  return (
    <div className="flex justify-center w-full h-max bg-gray-300">
      <div className="flex flex-col lg:w-1/2 w-full mx-auto shadow-black shadow-2xl my-4 bg-white items-left justify-left">
        <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 py-8 flex items-center justify-center">
          <h3 className="lg:text-3xl text-white text-2xl font-bold">
            Refund Claim Application
          </h3>
        </div>

        <form
          onSubmit={handleSubmit}
          className="text-left p-4 sm:p-10 space-y-4 gap-0"
        >
          {Modal && <DisclaimerModal setModal={setModal} />}
          <div className="space-y-4 w-full">
            <h3 className="text-2xl text-emerald-600 font-bold">
              Enter Your Details
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InputGroup2
                name="name"
                label="Full Name"
                inputLabel={"Full Name"}
                value={formData.name}
                onChange={handleInputChange}
                onInput={handleInputAlphabetChange}
                onBlur={handleBlur}
                error={errors.name}
              />

              <InputGroup2
                type="number"
                name="mobile_number"
                label="Mobile Number"
                inputLabel={"Mobile Number"}
                value={formData.mobile_number}
                onInput={handleInputMobileNumberChange}
                max="10"
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.mobile_number}
              />
            </div>
            <div className="gap-2 space-y-2">
              <h3 className="text-2xl text-emerald-600 font-bold">Address</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <InputGroup2
                  name="houseAddress"
                  label="H.No, Street, Address Line"
                  inputLabel={"Address"}
                  value={formData.houseAddress}
                  onChange={handleInputChange}
                  onInput={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.houseAddress}
                />
                <InputGroup2
                  name="city"
                  label="City"
                  inputLabel={"City"}
                  value={formData.city}
                  onInput={handleInputAlphabetChange}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.city}
                />
                <div className="col-span-1 sm:col-span-2">
                  <label>State</label>
                  <select
                    name="state"
                    id="state"
                    className="w-full form-control border-2 p-3 rounded-lg"
                    onChange={handleInputAlphabetChange}
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
                  inputLabel={"Country"}
                  value={formData.country}
                  onBlur={handleBlur}
                  error={errors.country}
                />
                <InputGroup2
                  type="number"
                  name="postal_code"
                  label="ZIP/Postal Code"
                  inputLabel={"ZIP/Postal Code"}
                  value={formData.postal_code}
                  onInput={handleInputZipCodeChange}
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  error={errors.postal_code}
                />
              </div>
            </div>
          </div>
          <h3 className="text-2xl text-emerald-600 font-bold pt-2">
            Details As Per Bond
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <InputGroup2
              name="name_as_per_bond"
              label="Name As Per Bond/Agreement/E-Stamp"
              inputLabel={"Name As Per Bond/Agreement/E-Stamp"}
              value={formData.name_as_per_bond}
              onInput={handleInputAlphabetChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.name_as_per_bond}
            />
            <InputGroup2
              name="fathers_name"
              label="Father's Name"
              inputLabel={"Father's Name"}
              value={formData.fathers_name}
              onInput={handleInputAlphabetChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.fathers_name}
            />
            <InputGroup2
              type="text"
              name="bond_reference_number"
              label="Bond Reference Number"
              inputLabel={"Bond Reference Number"}
              value={formData.bond_reference_number}
              maxLength={6}
              onInput={handleInputAlphaNumericChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.bond_reference_number}
            />
            <div className="col-span-1 sm:col-span-2 md:flex md:gap-4">
              <InputGroup2
                name="invested_amount"
                label="Invested Amount"
                inputLabel={"Invested Amount"}
                value={formData.invested_amount}
                onInput={handleInputNumberChange}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.invested_amount}
              />
            </div>
            <div className="flex flex-col col-span-1 sm:col-span-2">
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
            <div className="col-span-1 sm:col-span-2 flex items-center justify-center">
              <InputGroup2
                type="number"
                name="monthly_received_amount"
                inputLabel={"Enter Amount You Received Monthly"}
                label="Enter Amount You Received Monthly"
                value={formData.monthly_received_amount}
                onInput={handleInputNumberChange}
                onChange={handleInputChange}
                onBlur={handleBlur}
                error={errors.monthly_received_amount}
              />
            </div>
            <div className="col-span-1 sm:col-span-2 flex flex-col sm:flex-row p-2 items-center  sm:space-x-4">
              <label className="font-semibold">Payment Method:</label>
              <div className="flex sm:flex-row items-center space-x-4 sm:space-x-4 p-2 ">
                <label className="flex items-center space-x-2 ">
                  <input
                    type="radio"
                    name="paymentFiles"
                    value="online"
                    onChange={handleSelectChange}
                    className="form-radio text-emerald-600"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Online
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="paymentFiles"
                    value="cash"
                    onChange={handleSelectChange}
                    className="form-radio text-emerald-600"
                  />
                  <span className="text-sm font-medium text-gray-700">
                    Cash
                  </span>
                </label>
              </div>
              {isOnline && (
                <div className="w-full sm:w-auto p-2 flex flex-col items-center justify-center border rounded-lg bg-gray-50 space-y-2">
                  <div className="flex flex-col items-center">
                    <label className="text-sm font-medium text-gray-700 mb-2">
                      Upload Documents
                    </label>
                    <input
                      type="file"
                      name="paymentFiles"
                      onChange={handleFileChange}
                      multiple
                      className="block w-full text-sm text-slate-500
            file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
            file:bg-emerald-50 file:text-emerald-700
            hover:file:bg-emerald-100"
                    />
                    <span className=" text-red-500">{errors.paymentFiles}</span>
                  </div>
                  {fileError && (
                    <span className="text-red-500 text-sm">{fileError}</span>
                  )}
                </div>
              )}
            </div>

            <InputGroup2
              name="agent_name"
              label="Agent Name"
              inputLabel={"Agent Name"}
              value={formData.agent_name}
              onInput={handleInputAlphabetChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.agent_name}
            />
            <InputGroup2
              type="number"
              name="agent_mobile_number"
              inputLabel={"Agent Mobile Number"}
              label="Agent Mobile Number"
              value={formData.agent_mobile_number}
              onInput={handleInputMobileNumberChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.agent_mobile_number}
            />
            <InputGroup2
              name="sub_agent_name"
              label="Sub-Agent Name (if applicable)"
              inputLabel={"Sub-Agent Name (if applicable)"}
              value={formData.sub_agent_name}
              onInput={handleInputAlphabetChange}
              onChange={handleInputChange}
              onBlur={handleBlur}
              error={errors.sub_agent_name}
            />
            <div className="flex flex-col p-1 gap-2 justify-center col-span-1 sm:col-span-2">
              <label className="text-sm font-semibold">
                Upload Your Bond/Agreement
              </label>
              <input
                type="file"
                multiple
                name="bondFiles"
                onChange={handleFileChange}
                className="block w-full text-sm text-slate-500
                      file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold
                      file:bg-emerald-50 file:text-emerald-700
                      hover:file:bg-emerald-100"
              />
            </div>
            <span className=" text-red-500">{errors.bondFiles}</span>

          </div>
          <div className="flex flex-col gap-4 items-center">
            <div>
              <input
                type="checkbox"
                checked={termsAccepted}
                onChange={handleTermsCheckboxChange}
              />
              <label htmlFor="terms1">
                &nbsp;I confirm that all the information provided is accurate
                and true to the best of my knowledge. I understand that any
                incorrect or incomplete information may result in the rejection
                of my claim or a delay in processing.
              </label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={conditionsAccepted}
                onChange={handleConditionsCheckboxChange}
              />
              <label htmlFor="terms2">
                &nbsp;I have read and understood the disclaimer and agree to
                abide by the terms and conditions of the Darwesh Group's Online
                Investment Claim Portal.
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="md:w-1/2 w-full text-xl rounded-lg p-2 border-2 bg-emerald-600 text-white
              hover:ring-2 hover:ring-emerald-800"
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