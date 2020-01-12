export default function ({ route, redirect }) {
    console.log('route', route.path);
    if (route.path === '/') {
        redirect('/home');
    }
    return true;
}