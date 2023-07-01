function Table({ userdata }) {

  return (
    <div className="flex justify-center items-center">
    {
      userdata.length ? <>
        <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                name
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                Customfield
              </th>
            </tr>
          </thead>
          <tbody>
            {userdata.map((e) => {
              return (
                <>
                  <tr className="bg-white border-b">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {e?.firstName}
                    </th>
                    <td className="px-6 py-4">{e.email}</td>
                    <td className="px-6 py-4">{e.customField[0]?.value}</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      </> : <h1>No data available</h1>
    }
    </div>
  );
}

export default Table;
