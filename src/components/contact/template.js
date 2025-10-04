export default function getTemplate(contact) {
  return `<tr class="contact-row">
              <td class="p-4">
                <span class="firstname isEditing-hidden">${contact.firstName}</span>
                <input
                  type="text"
                  class="input-firstname isEditing-visible w-full mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value="${contact.firstName}"
                />
              </td>
              <td class="p-4">
                <span class="lastname isEditing-hidden">${contact.lastName}</span>
                <input
                  type="text"
                  class="input-lastname isEditing-visible w-full mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value="${contact.lastName}"
                />
              </td>
              <td class="p-4">
                <span class="email isEditing-hidden">${contact.email}</span>
                <input
                  type="text"
                  class="input-email isEditing-visible w-full mt-1 block w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  value="${contact.email}"
                />
              </td>
              <td class="p-4">
                <div class="flex justify-end space-x-2">
                  <button
                    class="btn-check isEditing-visible bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md"
                  >
                    <i class="fa-solid fa-check"></i>
                  </button>
                  <button
                    class="btn-edit isEditing-hidden bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-md"
                  >
                    <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    class="btn-delete isEditing-hidden bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md"
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </div>
              </td>
            </tr>`;
}
