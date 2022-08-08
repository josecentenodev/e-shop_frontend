import { useState, useEffect } from "react";
import ListOfCategories from "./ListOfCategories";
import { useCategories } from "../../hooks/useCategories";
import { BounceLoader } from "react-spinners";

export default function Categories() {
    const { categories } = useCategories();
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        if (categories) {
            setLoading(false);
        }
    }, [categories]);
    return (
        <>
            {loading ? (
                <>
                    <BounceLoader
                        color='rgb(100 116 139)'
                        cssOverride={{
                            borderColor: "red",
                            display: "block",
                            margin: "75px auto",
                        }}
                    />
                </>
            ) : (
                <ListOfCategories categories={categories} />
            )}
        </>
    );
}
