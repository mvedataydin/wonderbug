export const PROJECTS = [
    {
        id: 'project1',
        name: 'Bug Tracker Project',
        description: 'This is a simple bug tracking project for my portfolio.',
        creator: 'user1',
    },
    {
        id: 'project2',
        name: 'Personal Website Project',
        description: 'My personal web site project',
        creator: 'user1',
    },
    {
        id: 'project3',
        name: 'Restaurant page project',
        description: 'Building a responsive restaurant page',
        creator: 'user2',
    },
]

export const ISSUES = [
    {
        id: 'issue1',
        title: 'Dashboard Graph',
        description:
            'Implement dashboard graphs which indicates issue types and numbers',
        type: 'feature',
        priority: 'medium',
        status: 'open',
        assignedDev: 'user3',
        submittedBy: 'user1',
        project: 'project1',
        createDate: new Date().toLocaleString(),
        updateDate: new Date().toLocaleString(),
    },
    {
        id: 'issue2',
        title: 'Dark mode',
        description: 'Add dark mode with toggle option',
        type: 'feature',
        priority: 'low',
        status: 'open',
        assignedDev: 'user3',
        submittedBy: 'user1',
        project: 'project2',
        createDate: new Date().toLocaleString(),
        updateDate: new Date().toLocaleString(),
    },
    {
        id: 'issue3',
        title: 'Padding of adress section',
        description: 'add more padding to adress section for mobile view only',
        type: 'improvement',
        priority: 'low',
        status: 'open',
        assignedDev: 'user3',
        submittedBy: 'user2',
        project: 'project3',
        createDate: new Date().toLocaleString(),
        updateDate: new Date().toLocaleString(),
    },
]

export const USERS = [
    {
        id: 'user1',
        name: 'Vedat Aydin',
        email: 'vedat@wonderbug.com',
        role: 'Admin',
    },
    {
        id: 'user2',
        name: 'Sedat Aydin',
        email: 'sedat@wonderbug.com',
        role: 'PManager',
    },
    {
        id: 'user3',
        name: 'John Doe',
        email: 'john@wonderbug.com',
        role: 'Developer'
    }
]
