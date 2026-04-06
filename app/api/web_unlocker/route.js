import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { query, startFrom=0, API_KEY="0f058ff66123192f0e8f20b54a1f0c66a93de9a4a52798e5205d157b0ba01532", verifying=false, scraper_type="google_search" } = await req.json();
        let url = query;
        if(scraper_type === "google_search") url = `https://www.google.com/search?q=${encodeURIComponent(query)}&start=${startFrom}`;
        else if(scraper_type === "bing_search") url = `https://www.bing.com/search?q=${encodeURIComponent(query)}&start=${startFrom}`;
        const requestDOM = await axios.post("https://api.brightdata.com/request", { 
            zone: "web_unlocker1",
            url,
            format: "raw"
        }, {
            headers: {
                Authorization: `Bearer ${API_KEY}`,
            },
        });
        // console.log("End Time: ", new Date().toLocaleTimeString());

        if(verifying){
            return NextResponse.json({status: requestDOM.status === 200 ? true : false});
        }
        else {
            const pageContent = requestDOM.data;

            const rawEmails = Array.from(
                pageContent.matchAll(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g),
                m => m[0]
            );

            // Filter out entries that look like image names
            const emails = [...new Set(
                rawEmails.filter(email => !/\.(png|jpe?g|gif|webp|svg|bmp|tiff|heif|heic|ico|cur|psd|cdr|ai|eps|raw|cr2|nef|orf|sr2|rw2|dng|raf|arw|pef|x3f|pbm|pgm|ppm|pnm|hdr|exr|sgi|pic|pict|txt|md|rtf|docx?|odt|pdf|pages|tex|log|ans|wpd|xlsx?|xlsm|ods|csv|tsv|numbers|dbf|qif|qfx|pptx?|odp|key|js|jsx|ts|tsx|py|pyc|java|class|kt|kts|rb|php3?|pl|ps1|sh|bash|c|cpp|h|hpp|cs|go|rs|scala|swift|m|mm|vb|r|lua|groovy|erl|exs?|html?|xhtml|css|scss|sass|less|xml|json|map|ya?ml|mp3|wav|aac|m4a|flac|ogg|oga|opus|wma|aiff|alac|amr|mp4|m4v|mov|avi|mkv|wmv|flv|webm|mpeg|mpg|ts|m2ts|zip|rar|tar|gz|tgz|bz2|xz|z|lz|cab|iso|img|dmg|jar|ttf|otf|woff2?|eot|sql|sqlite3?|db|mdb|accdb|ldf|bak|ini|cfg|conf|env|plist|reg|sys|service|desktop|exe|dll|so|bin|elf|app|deb|rpm|msi|apk|ipa|lock|toml|gradle|pom|war|ear|whl|gem|npmignore|json|yarnrc|dxf|dwg|stl|obj|fbx|blend|gltf|glb|kml|kmz|geojson|shp|shx|gpx|osm|eml|msg|vcf|ics|pem|crt|cer|key|p12|pfx|asc|bib|cls|sty|ipynb|rmd|nb|mnb|trace|out|metrics|perf|tmp|old|swp|part|crdownload|torrent|lnk|ace|zst|pak|cue|md5|sha1|sha256|checksum)$/i.test(email))
            )];
            const rawPhoneNumbers = Array.from(pageContent.matchAll(/\+?\d{1,4}?[-.\s]?\(?\d{2,5}\)?[-.\s]?\d{3,4}[-.\s]?\d{4,9}/g), m => m[0]);
        
            const isValidPhoneNumber = (number) => {
                // Remove unnecessary symbols
                let cleaned = number.replace(/[^\d+]/g, "");
                // Filter invalid cases
                if (cleaned.length < 7 || cleaned.length > 15) return false; // Typical phone number length range
                if (/^\d+$/.test(cleaned) && (cleaned.length < 10 || cleaned.length > 14)) return false; // Basic digit check
                if (/^\+?\d{1,4}[-.\s]?\(?\d{2,5}\)?[-.\s]?\d{3,4}[-.\s]?\d{4,9}$/.test(number)) return true;
                return false;
            };
        
            const phoneNumbers = [...new Set(rawPhoneNumbers.filter(isValidPhoneNumber))].map(phone=>phone.replace(/[\s()\-\+]/g, '')) || [];
            return NextResponse.json([{emails, phones: phoneNumbers}]);
        }
    } catch (error) {
        if(error.status === 401){
            return NextResponse.json({ message: `Incorrect Authentication!`, error }, { status: 401 });
        }
        else return NextResponse.json({ message: `Internal server error!`, error }, { status: 500 });
    }
}