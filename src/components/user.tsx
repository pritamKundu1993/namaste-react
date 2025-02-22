// import React from 'react';

// interface Props {
//     name: string;
//     email: string;
// }

// const user = ({ name, email }: Props) => {
//     return (
//         <div className="user-class">
//             <p>name:{name}</p>
//             <p>Email:{email}</p>
//         </div>
//     );
// };

// export default user;

import React from 'react';

interface Props {
    name: string;
    email: string;
}

class User extends React.Component<Props, {}> {
    constructor(props: Props) {
        super(props);
        console.log(props); // Now TypeScript recognizes props
    }

    render() {
        const { name, email } = this.props;
        return (
            <div className="user-class">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
            </div>
        );
    }
}

export default User;
