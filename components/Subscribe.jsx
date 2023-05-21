export default function Subscribe() {
    return (
        <div className="p-6  mt-8 bg-gray-200/25 dark:text-gray-500  shadow rounded text-center overflow-hidden border-amber-400 border-1 shadow-md rounded dark:bg-gray-800/25">
        <h3 className="mb-2 text-xl font-bold dark:text-yellow-400 text-gray-500 sm:text-2xl">Newsletter</h3>
        <p className="mb-6 text-gray-500 text-sm">Subscribe & be notified when new articles & stuff are posted here. I won't spam or publish your email addresses. Unsubscribe anytime.
</p>
        <div href="/about" className="mb-10">
            <button
              type="button"
              className="py-2 px-6  text-gray-500 outline outline-1  font-bold hover:outline-2 rounded-full text-xs hover:text-cyan-700 dark:hover:text-cyan-700"
            >
              Subscribe to Newsletter
            </button>
            </div>
      </div>
    );
  }