// app/components/Copyright.tsx
export default function Copyright() {
  return (
    <footer className="bg-gray-900 px-6 py-6 text-gray-300">
      <div className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Engineered Tennis. All rights reserved. Website created by Brandon Tran
      </div>
    </footer>
  );
}
