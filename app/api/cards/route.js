import axios from 'axios'

import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const config = {
            method: 'GET',
            maxBodyLength: Infinity,
            url: 'https://api.clashroyale.com/v1/cards',
            headers: {
                Authorization:
                    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImQ1ZDhjMzBlLWY5YWMtNGYxZi04OGQ0LTc2MmRjYTRjMTAxNSIsImlhdCI6MTY5NzU1MjA5Miwic3ViIjoiZGV2ZWxvcGVyLzI4ZDQ3ODMwLTg5ZWMtOTgxNS0yYzNlLTBjNjNkOTU3ZDcxMiIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIyMDEuNDMuNTUuNDAiXSwidHlwZSI6ImNsaWVudCJ9XX0.xueV7REA5EuADR3c5bOpqMjYDvwWx-a3uDKrELktbaOOTmE8W68u8rJPFf9JzPwLAszljhayUikA2PmjCg3JJQ',
                'Content-Type': 'application/json'
            }
        }

        const response = await axios(config)

        return NextResponse.json(response.data)
    } catch (error) {
        console.log('[ORDER_GET]', error)
        return new NextResponse('Erro interno do servidor!', { status: 500 })
    }
}