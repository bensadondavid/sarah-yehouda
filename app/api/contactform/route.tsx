import { NextResponse } from "next/server"


export async function POST(req : Request){

    
    try {
        const body = await req.json()
        const { lastname, firstname, presence, number } = body
        const url = process.env.APPSCRIPT_URL
        if (!url) {
            return NextResponse.json({ message: "APPSCRIPT_URL manquant" }, { status: 500 });
            }
        if (!lastname || !firstname) {
            return NextResponse.json({ message: "Nom et prénom requis" }, { status: 400 });
            }

            if (presence !== "assisteront" && presence !== "n'assisteront pas") {
            return NextResponse.json({ message: "Présence invalide" }, { status: 400 });
            }

            if (presence === "assisteront") {
            const n = Number(number);
            if (!Number.isInteger(n) || n < 1) {
                return NextResponse.json({ message: "Nombre invalide" }, { status: 400 });
            }
        }
        const response = await fetch(url,{
            method : 'POST',
            headers : {'Content-Type' : 'application/json'},
            body : JSON.stringify(body)
        })
        if (!response.ok) {
            const detail = await response.text().catch(() => "");
            return NextResponse.json(
                { message: "Post Failed", statusFromScript: response.status, detail: detail.slice(0, 500) },
                { status: 502 }
            );
            }
        return NextResponse.json({message : 'Post succeded'}, {status : 200})
    } 
    catch (err) {
        const msg = err instanceof Error ? err.message : "Unknown error";
        return NextResponse.json({ message: "Internal server error", error: msg }, { status: 500 });
    }
}