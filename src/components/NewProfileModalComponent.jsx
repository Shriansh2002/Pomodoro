import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState, useReducer } from 'react';
import {
	FaCircleNotch,
	FaDigitalTachograph,
	FaPlusCircle,
} from 'react-icons/fa';

const NewProfileModalComponent = ({ profiles, handleAddProfile }) => {
	let [isOpen, setIsOpen] = useState(false);

	const [state, dispatch] = useReducer(reducer, { name: '', duration: '' });

	function reducer(state, action) {
		switch (action.type) {
			case 'SET_NAME':
				return { ...state, name: action.payload };
			case 'SET_DURATION':
				return { ...state, duration: action.payload };
			case 'RESET':
				return { name: '', duration: '' };
			default:
				throw new Error(`Unsupported action type: ${action.type}`);
		}
	}

	function handleChange(event) {
		const { name, value } = event.target;
		dispatch({ type: `SET_${name.toUpperCase()}`, payload: value });
	}

	function handleIconValue() {
		if (profiles.length === 3) {
			return <FaCircleNotch />;
		} else if (profiles.length == 4) {
			return <FaDigitalTachograph />;
		}
	}

	function handleSubmit(event) {
		event.preventDefault();

		state.duration = Number(state.duration);
		let iconVal = handleIconValue();

		handleAddProfile(state.name, iconVal, state.duration);
		dispatch({ type: 'RESET' });
		closeModal();
	}

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			{profiles.length < 5 && (
				<button
					onClick={openModal}
					className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 text-gray-500 hover:bg-gray-300 hover:text-gray-600"
				>
					<FaPlusCircle />
				</button>
			)}

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
									<form onSubmit={handleSubmit}>
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
												value={state.name}
												onChange={handleChange}
												className="border shadow-sm h-10 focus:border-blue-500 block w-full sm:text-sm rounded-md"
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
												value={state.duration}
												onChange={handleChange}
												className="border shadow-sm h-10 focus:border-blue-500 block w-full sm:text-sm rounded-md"
											/>
										</div>
										<div className="flex justify-end">
											<button
												type="button"
												className="px-4 py-2 text-sm font-medium text-gray-900 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
												onClick={() => {
													dispatch({ type: 'RESET' });
													closeModal();
												}}
											>
												Reset
											</button>
											<button
												type="submit"
												className="ml-3 inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
											>
												Save
											</button>
										</div>
									</form>
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
