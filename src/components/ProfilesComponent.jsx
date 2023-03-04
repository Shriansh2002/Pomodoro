const ProfilesComponent = ({
	profiles,
	currentProfile,
	handleProfileChange,
	handleAddProfile,
}) => {
	return (
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
				{/* <button
					className="pomodoro__add-profile"
					onClick={() => handleAddProfile('New Profile', null, 30)}
				>
					+
				</button> */}
			</div>
		</div>
	);
};

export default ProfilesComponent;
