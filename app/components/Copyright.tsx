// app/components/Copyright.tsx
export default function Copyright() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 px-6">
      <div className="text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Engineered Tennis. All rights reserved.
      </div>
    </footer>
  );
}