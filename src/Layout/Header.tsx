import React from 'react'

const Header = () => {
    return (
        <div>
            <nav className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-8 w-8"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                            </div>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a
                                        href="#"
                                        className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="https://www.frandieguez.dev"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Author
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Games in store
                    </h1>
                </div>
            </header>
        </div>
    )
}

export default Header
