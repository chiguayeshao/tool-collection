import React, { useState, useRef } from 'react'

const DEFAULT_MAX_FILE_SIZE_IN_BYTES = 500000
const KILO_BYTES_PER_BYTE = 1000
const convertBytesToKB = (bytes) => Math.round(bytes / KILO_BYTES_PER_BYTE)

const FileUpload = ({
    label,
    updateFilesCb,
    maxFileSizeInBytes = DEFAULT_MAX_FILE_SIZE_IN_BYTES,
    ...otherProps
}) => {
    const fileInputField = useRef(null)
    const [files, setFile] = useState({})
    return (
        <div className="container mx-auto px-4">
            <section>
                <label className="flex justify-start">{'label'}</label>
                <div className="order-solid border-2 border-indigo-600">
                    <p className="flex justify-center items-center pt-8 pb-4 font-bold tracking-wide">
                        Drag and drop your files anywhere or
                    </p>
                    <button type="button" className="UploadFileBtn">
                        <i className="fas fa-file-upload"></i>
                        <span>
                            Upload {otherProps.multiple ? 'files' : 'a file'}
                        </span>
                    </button>
                    <input
                        type="file"
                        ref={fileInputField}
                        title=""
                        value=""
                        {...otherProps}
                    />
                </div>
            </section>

            <article>
                <span>To Upload</span>
                <section>
                    {Object.keys(files).map((fileName, index) => {
                        let file = files[fileName]
                        let isImageFile = file.type.split('/')[0] === 'image'

                        return (
                            <section key={fileName}>
                                <div>
                                    {isImageFile && (
                                        <img
                                            src={URL.createObjectURL(file)}
                                            alt={`file preview ${index}`}
                                        />
                                    )}
                                    <div isImageFile={isImageFile}>
                                        <span>{file.name}</span>
                                        <aside>
                                            <span>
                                                {convertBytesToKB(file.size)} kb
                                            </span>
                                            <i className="fas fa-trash-alt" />
                                        </aside>
                                    </div>
                                </div>
                            </section>
                        )
                    })}
                </section>
            </article>
        </div>
    )
}

export default FileUpload
