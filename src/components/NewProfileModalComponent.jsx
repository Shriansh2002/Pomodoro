import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const NewProfileModalComponent = () => {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<div className="flex justify-center mb-4 py-2">
				<button
					className="p-4 flex items-center justify-between gap-2 rounded-md bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-600 font-bold"
					onClick={openModal}
				>
					<FaPlusCircle /> Add Custom Profile
				</button>
			</div>

			<Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-sm bg-white p-6 rounded-lg shadow-lg">
									<Dialog.Title className="text-lg font-medium text-gray-900 mb-2">
										Add a New Profile
									</Dialog.Title>
									<p className="text-sm text-gray-500 mb-4">
										Enter the name and duration of the new
										profile.
									</p>
									<div className="mb-4">
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Profile Name
										</label>
										<input
											type="text"
											id="name"
											name="name"
											className="shadow-sm border h-10 w-full sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
									<div className="mb-4">
										<label
											htmlFor="duration"
											className="block text-sm font-medium text-gray-700 mb-2"
										>
											Duration (in minutes)
										</label>
										<input
											type="number"
											id="duration"
											name="duration"
											className="shadow-sm h-10 border w-full sm:text-sm border-gray-300 rounded-md"
										/>
									</div>
									<div className="flex justify-end">
										<button
											type="button"
											className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
											onClick={closeModal}
										>
											Cancel
										</button>
										<button
											type="button"
											className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
											onClick={closeModal}
										>
											Save
										</button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default NewProfileModalComponent;
