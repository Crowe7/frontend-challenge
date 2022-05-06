declare global {
    namespace NodeJS {
        interface ProcessEnv {
            PORT: string;
            URI: string;
            DB_NAME: string;
            MIDWESTERN_SEEDED_COLLECTION_NAME: string;
        }
    }
}


// export blank so TS has this as its own module to avoid block-scope errors
export {}