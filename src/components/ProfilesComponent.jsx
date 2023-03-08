import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { BiCustomize } from 'react-icons/bi';
import { FaPlusCircle } from 'react-icons/fa';

const ProfilesComponent = ({
	profiles,
	currentProfile,
	handleProfileChange,
	handleAddProfile,
}) => {
	let [isOpen, setIsOpen] = useState(true);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<div className="flex justify-center mb-4 p-4">
				<div className="flex items-center space-x-4">
					{profiles.map((profile) => (
						<button
							key={profile.name}
							className={`flex items-center justify-center h-10 w-10 rounded-full ${
								profile.name === currentProfile.name
									? 'bg-blue-500 text-white'
									: 'bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-600'
							}`}
							onClick={() => handleProfileChange(profile)}
						>
							{profile.icon}
						</button>
					))}
					{/* To Add New Profiles */}
				</div>
			</div>
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
								<Dialog.Panel className="w-full max-w-sm transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Add A New Profile
									</Dialog.Title>
									<div className="mt-2">
										<p className="text-sm text-gray-500">
											You can add a new profile by
											entering the name and duration of
											the profile.
										</p>
									</div>
									<div className="mt-4">
										<label
											htmlFor="name"
											className="block text-sm font-medium text-gray-700"
										>
											Profile Name
										</label>
										<div className="mt-1">
											<input
												type="text"
												name="name"
												id="name"
												className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
											/>
										</div>
									</div>

									<div className="mt-4 flex justify-between">
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											SAVE
										</button>
										<button
											type="button"
											className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
											onClick={closeModal}
										>
											CANCEL
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

export default ProfilesComponent;
