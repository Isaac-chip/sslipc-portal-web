
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
function register(){
    const { data, error, loading } = useRequest({
        url:apiUrl+'/app-api/member/auth/register',
        method: 'POST',
        
    });
}