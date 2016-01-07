SELECT
  Firstname as firstName,
  Midlename as middleName,
  Lastname as lastName
FROM
  dbMetakatalog.dbo.tblObjects
WHERE
  ID = '@username'
