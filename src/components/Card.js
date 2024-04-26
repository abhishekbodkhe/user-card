import React from 'react';

const Card = ({ user }) => {
  return (

    <div class="p-4 m-2 flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg mr-4" src={user.picture.large} alt="User"/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <p class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{`${user.name.first} ${user.name.last}`}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Gender: {user.gender}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Phone: {user.phone}</p>
    </div>
</div>

  );
};

export default Card;
