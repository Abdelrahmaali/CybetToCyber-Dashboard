import React from 'react';
import { GridComponent, Inject, ColumnsDirective, ColumnDirective, Search, Page } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';

// Define the template outside of the component
const buttonClick = () => {
  alert(`Accepted `);
  // Add your custom logic here
};

const buttonClick2 = () => {
  alert(`Rejected `);
  // Add your custom logic here
}; 





const template = () => {
  return (
    <div className="flex justify-evenly">
      <button
        onClick={() => buttonClick()}
        style={{
          padding: '8px 16px',
          backgroundColor: '#179527',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '40px',
          cursor: 'pointer',
        }}
      >
        Accept
      </button>

      <button
        onClick={() => buttonClick2()}
        style={{
          padding: '8px 16px',
          backgroundColor: '#df1313',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '40px',
          cursor: 'pointer',
        }}
      >
        Reject
      </button>
    </div>
  );
};





const ViewProfile = () => {
  alert('profile reviewd')
}



const template2 = () => {
  return (
    <div className="flex justify-evenly">
      <button
        onClick={() => ViewProfile()}
        style={{
          padding: '8px 16px',
          backgroundColor: '#40ADDB',
          color: '#FFFFFF',
          border: 'none',
          borderRadius: '40px',
          cursor: 'pointer',
        }}
      >
        View profile
      </button>

     
    </div>
  );
};

const template3 = (employeesData) => {
  // Determine profile status based on the index (alternating between 'complete' and 'incomplete')
  const profileStatus = employeesData.EmployeeID % 2 === 0 ? 'complete' : 'incomplete';

  return (
    <p
      style={{
        textAlign:'center',
        color: profileStatus === 'complete' ? 'green' : 'red',
        border: 'none',
        cursor: 'pointer',
        fontSize:'small',
      }}
    >
      {profileStatus}
    </p>
  );
};




const Verficationreq = () => {
  const toolbarOptions = ['Search'];
  const editing = { allowDeleting: true, allowEditing: true };

  

  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Requests" />
      <GridComponent
        dataSource={employeesData}
        width="auto"
        allowPaging
        allowSorting
        pageSettings={{ pageCount: 4 }}
        editSettings={editing}
        toolbar={toolbarOptions}
      >
        <ColumnsDirective>
          {employeesGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
           <ColumnDirective headerText='Status'  headerTextAlign="center" headerTextOverflow="Ellipsis" template={template3} width="150"></ColumnDirective>
           <ColumnDirective headerText='Profile'  headerTextAlign="center" headerTextOverflow="Ellipsis" template={template2} width="150"></ColumnDirective>
          <ColumnDirective headerText='Actions'  headerTextAlign="center" headerTextOverflow="Ellipsis" template={template} width="150"></ColumnDirective>
        </ColumnsDirective>

        <Inject services={[Search, Page]} />
      </GridComponent>
    </div>
  );
};

export default Verficationreq;
