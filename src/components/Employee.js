const Employee = (props) => {
  return (
    <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20">
      <div className="flex justify-center md:justify-end -mt-16">
        <img
          className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
          src={"https://picsum.photos/seed/" + props.name + "/200"}
        />
      </div>
      <div>
        <h2 className="text-gray-800 text-3xl font-semibold">{props.name}</h2>
        <p className="mt-2 text-gray-600">
          Email: {props.email}
        </p>
      </div>
      <div className="flex justify-end mt-4">
          Phone: {props.phone}
        
      </div>
    </div>
  )
}

Employee.defaultProps = {
  name: "Bel",
  email: "bel@petarda.com",
  phone: "+34 677 688 699",
};

export default Employee;
