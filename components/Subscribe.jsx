export default function Subscribe() {
    return (
        <div class="p-6 mt-8 bg-gray-200/25 dark:text-gray-500  shadow rounded text-center overflow-hidden border-amber-400 border-1 shadow-md rounded dark:bg-gray-800/25">
        <h3 class="mb-2 text-xl font-bold dark:text-yellow-400 text-gray-500 sm:text-3xl">Newsletter</h3>
        <p class="mb-6 text-gray-500">Subscribe & be notified when new articles & stuff are posted here. I won't spam or publish your email addresses. Unsubscribe anytime.
</p>
        <div href="/about" class="mb-10">
            <button
              type="button"
              class=" inline-block px-6 py-2.5 outline outline-1  font-bold hover:outline-2 rounded-full text-xs leading-tight uppercase rounded-lg hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0   transition duration-150 ease-in-out"
            >
              Subscribe to Newsletter
            </button>
            </div>
      </div>
    );
  }