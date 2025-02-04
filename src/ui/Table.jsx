export default function Table({ children }) {
  return <div>{children}</div>;
}

function TableHead({ children, className }) {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
}
function TableBody({ children, className }) {
  return <div className={className}>{children}</div>;
}

function TableHeading({ children, className }) {
  return <div className={className}>{children}</div>;
}

function TableRow({ children, className }) {
  return <div className={`flex flex-row ${className}`}>{children}</div>;
}

function TableData({ children, className }) {
  return <div className={className}>{children}</div>;
}

Table.TableHead = TableHead;
Table.TableBody = TableBody;
Table.TableHeading = TableHeading;
Table.TableRow = TableRow;
Table.TableData = TableData;
